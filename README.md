## Sensitive Data Scrubbing Function

This function replaces sensitive data such as names, usernames, emails, and passwords with a masking replacement string. The function takes in a JSON argument and both returns the scrubbed data and prints it to the console.

To run this node function, run 
`node scrubber.js {input arg}`

For example, to run with test file test1.json, navigate to the project directory and run 
`node scrubber.js test1.json`
The scrubbed output should print to the console. It is also returned and could be piped into a downstream function