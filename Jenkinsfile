 pipeline {
      agent any
      stages {
          stage('Check Environment') {
              when {
                  expression { return params.current_status == "closed" && params.merged == true }
              }
              steps {
                  build 'Environment Check'
              }
          }
          stage('Download Private Repo') {
              when {
                  expression { return params.current_status == "closed" && params.merged == true }
              }
              steps {
                  build 'Download Private Repo'
              }
          }
          stage('Generate Public Folder') {
              when {
                  expression { return params.current_status == "closed" && params.merged == true }
              }
              steps {
                  build 'Generate Public Folder'
              }
          }
          stage('Move Public Folder') {
              when {
                  expression { return params.current_status == "closed" && params.merged == true }
              }
              steps {
                  build 'Move Public Folder'
              }
          }
          stage('Change Security Permissions') {
              when {
                  expression { return params.current_status == "closed" && params.merged == true }
              }
              steps {
                  build 'Change Security Permissions'
              }
          }
      }
  }