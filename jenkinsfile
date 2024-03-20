pipeline {
  agent any

  tools { nodejs 'node' }
  
  options {
        skipStagesAfterUnstable()
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    // stage('Test') {
    //   steps {
    //     sh 'node test'
    //   }
    // }
  stage('Deploy') {
          steps {
              sh 'pm2 start ecosystem.config.cjs --env production'
              // sh 'pm2 restart all' //https://medium.com/@suyog.nepal10/pm2-with-jenkins-b2e83bab9771
          }
      }
  }
}
