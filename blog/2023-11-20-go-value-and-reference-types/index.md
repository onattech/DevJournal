---
slug: go-essentials-value-reference-types
title: "Go Essentials: Value and Reference Types"
authors: [onat]
tags: [go]
---

# Go Essentials: Working with Value and Reference Types

Go, a statically typed language, has distinct ways of handling different data types, specifically when it comes to value and reference types. Understanding the difference between these types and their behavior during assignments is crucial for writing effective and error-free Go programs. In this post, we'll explore how Go treats value and reference types and what implications this has for your code.

## Summary

In Go, **value types** create independent copies on assignment, meaning changes to the new variable won't affect the original. This is straightforward for types like integers, strings, and structs. In contrast, **reference types**, such as slices and maps, mean the new variable still references the same underlying data as the original, so changes to one are reflected in the other.

**_Note:_** _If an independent copy of a reference type is required, a [`deepcopy` library](#deep-copying-in-go) can be used to create a true copy that does not share references with the original._

| Data Type | Value Type | Reference Type | Note                             |
| --------- | :--------: | :------------: | -------------------------------- |
| String    |     ✅     |                |
| Int       |     ✅     |                |
| Float     |     ✅     |                |
| Boolean   |     ✅     |                |
| Struct    |     ✅     |                |
| Array     |     ✅     |                |
| Slice     |     ✅     |                | Exceeds capacity: New allocation |
| Slice     |            |       ✅       | Within capacity: Reference       |
| Map       |            |       ✅       |
| Pointer   |            |       ✅       |
| Channel   |            |       ✅       |
| Interface |            |       ✅       |

## Value Types in Go

### What Are They?

Value types in Go include basic data types like `integers`, `strings`, `floats`, and `booleans`, as well as `structs` and `arrays`. When dealing with these types, Go uses what's called **value semantics**.

### Behavior on Assignment

#### For basic types like integers:

```go
original := 10
new := original // 'new' is now a copy of 'original'
original = 20 // changing 'original' does not affect 'new'
fmt.Println(original) // Output: 20
fmt.Println(new) // Output: 10
```

When you assign the value of `original` to `new`, Go creates a copy of `original`'s value for `new`. After this operation, `new` and `original` are entirely independent of each other. Any subsequent changes to `original` have no impact on the value of `new`.

#### For arrays:

```go
original := [3]int{1, 2, 3}
new := original // This creates a copy of 'original'

new[0] = 100 // Changing 'new' does not affect 'original'
fmt.Println(original) // Output: [1 2 3]
fmt.Println(new)      // Output: [100 2 3]
```

In this example with arrays, modifying `new` does not change `original` because `new` is a complete copy of `original`, not a reference to it. This behavior highlights the **value semantics** of arrays in Go, making them fundamentally different from slices, which are reference types.

### Conclusion on Value Types

Understanding the behavior of value types in Go is crucial for correctly managing data in your programs. Since value types create independent copies, changes to one variable do not impact another, ensuring data integrity in operations that involve copying or reassigning values.

## Reference Types in Go

### What Are They?

Reference types include slices, maps, and channels. These types are handled differently compared to value types in Go.

### Behavior on Assignment

```go
original := []int{1, 2, 3}
new := original // 'new' and 'original' refer to the same slice
original[0] = 100 // changing 'original' affects 'new'
fmt.Println(original) // Output: [100 2 3]
fmt.Println(new) // Output: [100 2 3]
```

With reference types, when you assign `original` to `new`, both variables point to the same underlying data structure. Therefore, changes made via `original` are reflected in `new` and vice versa. This shared reference means that you need to be careful with concurrent operations or when passing these types as function arguments.

### Special Case with Slices

When working with slices in Go, it's important to understand how they behave differently from other reference types, especially in terms of appending elements and modifying the slice.

#### Modifying Elements of a Slice

When you modify the elements of a slice, these changes are reflected in any other slice that references the same underlying array.

```go
original := []int{1, 2, 3}
new := original  // new and original refer to the same slice

original[0] = 100  // Modifying an element in original
fmt.Println(original) // Output: [100 2 3]
fmt.Println(new)      // Output: [100 2 3], change is reflected in 'new'
```

In this example, `new` and `original` share the same underlying array. Therefore, a modification in one slice is visible in the other.

### Appending Elements to a Slice

Appending to a slice in Go can have different outcomes based on whether it causes the underlying array to reallocate.

#### Without Reallocating

If the append operation does not exceed the slice's capacity, no new array is allocated, and changes are reflected in all slices sharing the same array.

```go
original := make([]int, 2, 3) // slice with length 2 and capacity 3
original[0] = 1
original[1] = 2

new := original // new and original refer to the same slice

original = append(original, 3) // Appending within the capacity
fmt.Println(new)      // Output: [1 2 3], change is reflected in 'new'
fmt.Println(original) // Output: [1 2 3]
```

Here, `new` and `original` still point to the same array, and the appended element is visible in both.

#### With Reallocating

However, if appending to the slice exceeds its capacity, Go allocates a new array for the slice. After this reallocation, changes made to the slice do not affect other slices that previously referenced the same array.

```go
original := make([]int, 2, 2) // slice with length 2 and capacity 2
original[0] = 1
original[1] = 2

new := original // new and original refer to the same slice

original = append(original, 3) // Appending causes reallocation
fmt.Println(new)      // Output: [1 2], change is not reflected in new
fmt.Println(original) // Output: [1 2 3]
```

In this scenario, `original` points to a new array after appending, while `new` continues to reference the original array.

### Conclusion on Slices

Understanding these nuances with slices is key in Go programming. It helps you predict and control how data in your slices will behave when you perform various operations, ensuring you can effectively manage and manipulate your data structures.

## Pointers in Go

Pointers in Go add another layer to this discussion.

```go
type myStruct struct {
    Field int
}

original := &myStruct{Field: 10}
new := original // new and original point to the same myStruct
original.Field = 20 // changing the field via original also changes new

fmt.Println(original.Field)  // Output: 20
fmt.Println(new.Field)       // Output: 20
```

When `original` is a pointer, and you assign `original` to `new`, both `new` and `original` point to the same memory location. Consequently, any changes to the data that `original` points to are also seen in `new`.

## Deep Copying in Go

While working with reference types in Go, such as slices and maps, you might encounter situations where you need an independent copy of an object that does not affect its original. In standard assignments, as explained earlier, modifying the copy would also modify the original since they reference the same underlying data.

This is where deep copy libraries come into play. They allow you to create a complete copy of your data structures, including all nested structures, ensuring that no references to the original structures are retained. One popular library for deep copying in Go is https://github.com/mohae/deepcopy.

### Using a Deep Copy Library

Here's an example of how to use a deep copy library in Go:

```go
package main

import (
    "fmt"
    "github.com/mohae/deepcopy"
)

func main() {
    original := map[string]string{"key1": "value1", "key2": "value2"}
    new := deepcopy.Copy(original).(map[string]string)

    new["key1"] = "newValue1" // Changing 'new' does not affect 'original'
    fmt.Println("Original:", original) // Output: Original: map[key1:value1 key2:value2]
    fmt.Println("New:", new)           // Output: New: map[key1:newValue1 key2:value2]
}
```

This example demonstrates how deepcopy can be used to create a completely independent copy of a map. Changes made to new do not affect original, which is a crucial feature when dealing with complex data structures in concurrent or multi-threaded applications.

## Conclusion

-   **Value Types**: Changes to `original` do not affect `new` after the assignment.
-   **Reference Types & Pointers**: Changes to the data that `original` refers to will affect `new` if `new` and `original` refer to the same data.

Understanding these semantics is key in Go programming, especially when dealing with complex data structures or managing concurrency. It helps in writing code that behaves as expected and avoids common pitfalls related to data handling in Go.
