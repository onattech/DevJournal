const fs = require("fs")
require("dotenv").config()

// A JavaScript function that returns an object.
async function commitHash() {
    return {
        name: "commit-hash",
        async postBuild() {
            fs.readFile("./build/index.html", "utf8", (err, data) => {
                if (err) throw err

                // Find the line that starts with '<html'
                const htmlLineIndex = data.indexOf("<html")

                if (htmlLineIndex === -1) {
                    console.error("Could not find the line starting with <html")
                    return
                }

                // Append the data-hash attribute to the line
                const htmlLineEndIndex = data.indexOf(">", htmlLineIndex)
                const updatedHtmlLine = `${data.slice(
                    htmlLineIndex,
                    htmlLineEndIndex
                )} data-commit-hash=${process.env.COMMIT_HASH}>`

                // Replace the old line with the updated one
                const updatedData =
                    data.slice(0, htmlLineIndex) +
                    updatedHtmlLine +
                    data.slice(htmlLineEndIndex + 1)

                // Save the updated file
                fs.writeFile(
                    "./build/index.html",
                    updatedData,
                    "utf8",
                    (err) => {
                        if (err) throw err
                        console.log(
                            "index.html updated with commit-hash successfully"
                        )
                    }
                )
            })
        },
    }
}

module.exports = commitHash
