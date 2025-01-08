import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // 测试环境
    environment: "jsdom", // 可以是 'jsdom' 或 'node'
    setupFiles: ["./vitest.setup.ts"], // 测试运行前的初始化文件
    // 允许通过 mock 模拟模块
    // mockReset: true,

    // 忽略某些文件夹或文件
    exclude: [
      "**/node_modules/**", // 排除 node_modules 目录
      "**/dist/**", // 排除 dist 目录
    ],

    // 测试运行的超时时间
    // timeout: 10000, // 默认为 5000ms，这里设置为 10秒

    // 是否自动清除测试后的文件系统缓存
    // clearMocks: true,

    // 是否启用 watch 模式
    // watch: false,

    // 是否启用并行运行
    // parallel: true,

    // 配置测试覆盖率，指定哪些文件或文件夹需要计算覆盖率
    // coverage: {
    //   provider: "c8", // 使用 c8 作为覆盖率提供者
    //   reporter: ["text", "json", "html"], // 输出报告的格式
    //   include: ["src/**/*.{ts,tsx,js,jsx}"], // 覆盖率计算的目标文件
    //   exclude: ["**/node_modules/**", "**/*.d.ts"], // 排除不需要计算的文件
    // },

    // 配置单独测试的文件
    globals: true, // 允许在测试中直接使用 `describe`, `it`, `expect` 等全局变量

    // 是否启用 Snapshot Testing
    // snapshot: {
    //   // 设置快照比较时的容忍误差
    //   updateSnapshot: "all", // 可以设置为 'all' 或 'new'，'all' 会更新所有快照
    // },

    // 处理源码的转译配置，通常用于编译 TypeScript 和 JSX
    // transform: {
    //   // 使用 esbuild 转换 tsx 文件
    //   // "^.+\\.tsx?$": "esbuild",
    // },

    // 配置额外的全局变量，通常用于一些框架或库的模拟
    // globals: {
    //   // 配置一些额外的全局变量，比如在 Node 环境下使用 fs 模块
    //   "my-global-variable": "value",
    // },

    // 是否生成详细的测试报告
    // verbose: true,
  },
});
