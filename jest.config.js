module.exports={
    transform:{
        "^.+\\.ts$":"ts-jest"
    },
    testEnvironment:'node',
    testMatch:["**/test/*.test.ts"],
    moduleFileExtensions:["js", "ts"]
}