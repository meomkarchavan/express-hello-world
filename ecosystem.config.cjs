module.exports = {
  apps: [{
    name: 'express-hello-world-app',
    script: './app.js',
    watch: true,
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production',
    },
    /* Log files */
    log_date_format: 'YYYY-MM-DD HH:mm Z', /* (string) log date format */
    // 'error_file: '', /* (string) error file path (default to $HOME/.pm2/logs/XXXerr.log) */
    // 'out_file: '', /* (string) output file path (default to $HOME/.pm2/logs/XXXout.log) */
    combine_logs: true, /* (boolean) if true, avoid to suffix logs file with the process id */
    // 'merge_logs: '', /* (boolean) alias to combine_logs*/
    // 'pid_file: '', /* (string) pid file path (default to $HOME/.pm2/pid/app-pm_id.pid) */
    log_type: 'json', /* none documented function */
  }],
};
