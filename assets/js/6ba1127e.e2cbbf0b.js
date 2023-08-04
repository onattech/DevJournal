"use strict";(self.webpackChunkdev_journal=self.webpackChunkdev_journal||[]).push([[7616],{2399:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=t(3010),a=t(2803);const i={sidebar_position:1},r="GO doc tutorial",o={unversionedId:"tutorial-golang/go-doc",id:"tutorial-golang/go-doc",title:"GO doc tutorial",description:"Here are my examples to what is possible with Go Doc syntax explained here.",source:"@site/docs/tutorial-golang/go-doc.mdx",sourceDirName:"tutorial-golang",slug:"/tutorial-golang/go-doc",permalink:"/docs/tutorial-golang/go-doc",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Golang",permalink:"/docs/category/golang"}},c={},l=[{value:"Quotes",id:"quotes",level:2},{value:"Headings",id:"headings",level:2},{value:"Links",id:"links",level:2},{value:"Doc Links",id:"doc-links",level:2},{value:"Lists",id:"lists",level:2},{value:"Numbered Lists",id:"numbered-lists",level:2},{value:"Lists with Sub Items",id:"lists-with-sub-items",level:2},{value:"Code Blocks",id:"code-blocks",level:2},{value:"Code blocks 2",id:"code-blocks-2",level:2},{value:"Preformatted text",id:"preformatted-text",level:2},{value:"Pretty JSON",id:"pretty-json",level:2},{value:"Example function flow",id:"example-function-flow",level:2}];function d(e){const n=Object.assign({h1:"h1",admonition:"admonition",p:"p",a:"a",h2:"h2",img:"img",pre:"pre",code:"code"},(0,a.ah)(),e.components),{Resizer:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Resizer",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"go-doc-tutorial",children:"GO doc tutorial"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Here are my examples to what is possible with Go Doc syntax explained ",(0,s.jsx)(n.a,{href:"https://tip.golang.org/doc/comment",children:"here"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"quotes",children:"Quotes"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"quotes",src:t(6877).Z+"",width:"1328",height:"166"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"// \u201cA pair of consecutive backticks (` U+0060) is interpreted as a Unicode left quote (\u201c U+201C),\n// and a pair of consecutive single quotes (' U+0027) is interpreted as a Unicode right quote (\u201d U+201D).\u201d\nfunc Quotes() {}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"headings",children:"Headings"}),"\n",(0,s.jsx)(i,{percent:60,children:(0,s.jsx)(n.img,{alt:"headings",src:t(7461).Z+"",width:"709",height:"227"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"// Some text must have empty line after for the heading to work\n//\n// # Some Heading\n//\n// Some text must have empty line before for the heading to work\nfunc Heading() {}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"links",children:"Links"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"links",src:t(9505).Z+"",width:"1302",height:"213"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"// Package json implements encoding and decoding of JSON as defined in\n// [RFC 7159]. The mapping between JSON and Go values is described\n// in the documentation for the Marshal and Unmarshal functions.\n//\n// For an introduction to this package, see the article\n// \u201c[JSON and Go].\u201d\n//\n// [RFC 7159]: https://tools.ietf.org/html/rfc7159\n// [JSON and Go]: https://golang.org/doc/articles/json_and_go.html\nfunc Links() {}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"doc-links",children:"Doc Links"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"doclinks",src:t(8038).Z+"",width:"1308",height:"197"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"// ReadFrom reads data from r until EOF and appends it to the buffer, growing\n// the buffer as needed. The return value n is the number of bytes read. Any\n// error except [io.EOF] encountered during the read is also returned. If the\n// buffer becomes too large, ReadFrom will panic with [ErrTooLarge].\nfunc DocLinks() {}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"lists",children:"Lists"}),"\n",(0,s.jsx)(i,{percent:80,children:(0,s.jsx)(n.img,{alt:"lists",src:t(3620).Z+"",width:"1006",height:"293"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// PublicSuffixList provides the public suffix of a domain. For example:\n//   - the public suffix of "example.com" is "com",\n//   - the public suffix of "foo1.foo2.foo3.co.uk" is "co.uk", and\n//   - the public suffix of "bar.pvt.k12.ma.us" is "pvt.k12.ma.us".\n//\n// Implementations of PublicSuffixList must be safe for concurrent use by\n// multiple goroutines.\nfunc Lists() {}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"numbered-lists",children:"Numbered Lists"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"numberedLists",src:t(3210).Z+"",width:"1324",height:"468"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// Clean returns the shortest path name equivalent to path\n// by purely lexical processing. It applies the following rules\n// iteratively until no further processing can be done:\n//\n//  1. Replace multiple slashes with a single slash.\n//  2. Eliminate each . path name element (the current directory).\n//  3. Eliminate each inner .. path name element (the parent directory)\n//     along with the non-.. element that precedes it.\n//  4. Eliminate .. elements that begin a rooted path:\n//     that is, replace "/.." by "/" at the beginning of a path.\n//\n// The returned path ends in a slash only if it is the root "/".\n//\n// If the result of this process is an empty string, Clean\n// returns the string ".".\n//\n// See also Rob Pike, \u201c[Lexical File Names in Plan 9].\u201d\nfunc NumberedList() {}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"lists-with-sub-items",children:"Lists with Sub Items"}),"\n",(0,s.jsx)(i,{percent:40,children:(0,s.jsx)(n.img,{alt:"listsWithSubItems",src:t(804).Z+"",width:"446",height:"354"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"// Here is a list:\n//\n//  1. Item 1.\n//\n//     - Subitem 1.\n//\n//     - Subitem 2.\n//\n//  2. Item 2.\n//\n//  3. Item 3.\nfunc ListWithSubitems() {}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"code-blocks",children:"Code Blocks"}),"\n",(0,s.jsx)(i,{percent:60,children:(0,s.jsx)(n.img,{alt:"codeBlocks",src:t(4066).Z+"",width:"736",height:"518"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// Search uses binary search...\n//\n// As a more whimsical example, this program guesses your number:\n//\n//\tfunc GuessingGame() {\n//\t    var s string\n//\t    fmt.Printf("Pick an integer from 0 to 100.\\n")\n//\t    answer := sort.Search(100, func(i int) bool {\n//\t        fmt.Printf("Is your number <= %d? ", i)\n//\t        fmt.Scanf("%s", &s)\n//\t        return s != "" && s[0] == \'y\'\n//\t    })\n//\t    fmt.Printf("Your number is %d.\\n", answer)\n//\t}\nfunc CodeBlocks() {}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"code-blocks-2",children:"Code blocks 2"}),"\n",(0,s.jsx)(i,{percent:30,children:(0,s.jsx)(n.img,{alt:"codeBlocks2",src:t(4087).Z+"",width:"387",height:"325"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"// Sqrt returns the square root of x.\n//\n// Special cases are:\n//\n//\tSqrt(+Inf) = +Inf\n//\tSqrt(\xb10) = \xb10\n//\tSqrt(x < 0) = NaN\n//\tSqrt(NaN) = NaN\nfunc CodeBlocks2() {}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"preformatted-text",children:"Preformatted text"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"preformattedText",src:t(7907).Z+"",width:"1323",height:"678"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"// Match reports whether name matches the shell pattern.\n// The pattern syntax is:\n//\n//\tpattern:\n//\t    { term }\n//\tterm:\n//\t    '*'         matches any sequence of non-/ characters\n//\t    '?'         matches any single non-/ character\n//\t    '[' [ '^' ] { character-range } ']'\n//\t                character class (must be non-empty)\n//\t    c           matches character c (c != '*', '?', '\\\\', '[')\n//\t    '\\\\' c      matches character c\n//\n//\tcharacter-range:\n//\t    c           matches character c (c != '\\\\', '-', ']')\n//\t    '\\\\' c      matches character c\n//\t    lo '-' hi   matches character c for lo <= c <= hi\n//\n// Match requires pattern to match all of name, not just a substring.\n// The only possible returned error is [ErrBadPattern], when pattern\n// is malformed.\nfunc PreformattedText() {}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"pretty-json",children:"Pretty JSON"}),"\n",(0,s.jsx)(i,{percent:35,children:(0,s.jsx)(n.img,{alt:"prettyJson",src:t(4).Z+"",width:"464",height:"406"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'/*\n# Pretty JSON\n\n\t{\n\t\t"key1": "value1",\n\t\t"key2": "value2",\n\t\t"key3": {\n\t\t    "subkey1": "subvalue1",\n\t\t    "subkey2": "subvalue2"\n\t\t}\n\t}\n*/\nfunc JsonPretty() {}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example-function-flow",children:"Example function flow"}),"\n",(0,s.jsx)(i,{percent:40,children:(0,s.jsx)(n.img,{alt:"exampleFunction",src:t(4233).Z+"",width:"465",height:"470"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'/*\n# Example function flow\n\n\tx:= {\n\t    "key1": "value1",\n\t    "key2": "value2",\n\t    "key3": {\n\t        "subkey1": "subvalue1",\n\t        "subkey2": "subvalue2"\n\t    }\n\t}\n\n\tgiveMe(x) ==> "subvalue2"\n*/\nfunc ExampleFlows() {}\n'})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},4066:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/codeBlocks-2860e3603f276d26272718551df9f0a8.png"},4087:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/codeBlocks2-f825d337bdb2074484e73b5c6cd763e5.png"},8038:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/doclinks-45e551f2114698be3674281de9d702d4.png"},4233:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/exampleFunction-ce679f352cd46e658689231ab0f64df7.png"},7461:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/headings-868c177c72c3a897fad4698f01ff01ab.png"},9505:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/links-5bd0df1a48c7641173dbf208d99f9a49.png"},3620:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/lists-abc954709642887f2272b436f93884b5.png"},804:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/listsWithSubItems-2ce3a8644acb870c611af1b62e4c4eb9.png"},3210:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/numberedLists-e19fc1f6ae8dc700ca0afd8b06cde49a.png"},7907:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/preformattedText-b5b07e7b647c9744b2213658aae37a6e.png"},4:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/prettyJson-6c0d85038599c99d986c66e27741dd02.png"},6877:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/quotes-5b8d0b5fb9a736a488217e054c3a90e7.png"},2803:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>i});var s=t(5170);const a=s.createContext({});function i(e){const n=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||r:i(e),s.createElement(a.Provider,{value:o},n)}}}]);