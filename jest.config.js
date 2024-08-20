export default {
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.tsx?$": ["ts-jest", { diagnostics: false }]
    },
    moduleNameMapper: {
      "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    },
}
