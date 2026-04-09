module.exports = {
  apps: [
    {
      name: "ecommerce-app",
      script: "app.js",
      instances: 1,
      exec_mode: "fork",

      env: {
        NODE_ENV: "development",
        PORT: 3000
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3000
      },

      watch: false,
      max_memory_restart: "200M",

      error_file: "./logs/error.log",
      out_file: "./logs/output.log",
      log_date_format: "YYYY-MM-DD HH:mm Z"
    }
  ]
};