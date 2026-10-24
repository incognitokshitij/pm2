module.exports = {
  apps: [
    {
      name: "pm2",
      script: "index.js",
      instances: 3,
      exec_mode: "cluster",
      autorestart: true,
      watch: true,
      ignore_watch: ["node_modules", "logs", "*.log"],
      restart_delay: 1000,
      max_restarts: 10,
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};