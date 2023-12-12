pipeline {
    agent { 
        label 'docker-test-agent'
    }
    options {
        timestamps()
        buildDiscarder(logRotator(numToKeepStr: '10'))
    }
    triggers {
        when{
            expression { return params.current_status == "closed" && params.merged == true }
        }
    }
    stages {
        stage('Test') {
            steps {
                echo "Testing Application.."
                script {
                    dir('./') {
                        echo 'Testing App'
                    }
                }
            }
        }
        stage('Build') {
            steps {
                echo "Building.."
                script {
                    dir('./') {
                        echo 'Building App'
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying to docker....'
                echo 'Deploy done'
            }
        }
    }
}
