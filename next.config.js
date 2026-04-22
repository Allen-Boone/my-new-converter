/** @type {import('next').NextConfig} */
const nextConfig = {
  // 保持这个最佳实践配置
  output: "standalone",

  // 加上这个！这就是根据最新的错误日志，我们找到的最终答案！
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
