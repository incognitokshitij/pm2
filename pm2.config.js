module.exports = {
  apps: [
    {
      name: "pm2",
      script: "index.js",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      restart_delay: 1000,
      max_restarts: 10,
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};