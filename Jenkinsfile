Jenkinsfile (Declarative Pipeline)
pipeline {
    agent { dockerfile true }
    stages {
        stage('Build') {
            steps {
                sh 'docker build -t reactapp:latest .'
                // sh 'svn --version'
            }
        }
//         stage('Deploy'){
//             steps{
//                 sh 'docker run \ -it \ --rm \ -v ${PWD}:/app \ -v /app/node_modules \ -p 3001:3000 \ reactapp:latest'
//             }
//         }
    }
}
