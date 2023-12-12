pipeline {
    agent { 
        label 'docker-test-agent'
    }
    options {
        timestamps()
        buildDiscarder(logRotator(numToKeepStr: '10'))
    }

    stages {
        stage('Test') {
                when{
            expression { return params.current_status == "closed" && params.merged == true }
        }
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
                when{
            expression { return params.current_status == "closed" && params.merged == true }
        }
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
                when{
            expression { return params.current_status == "closed" && params.merged == true }
        }
            steps {
                echo 'Deploying to docker....'
                echo 'Deploy done'
            }
        }
    }
}
