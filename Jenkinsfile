pipeline {
	agent any
		stages{
			stage('Build') {
				steps {
					script{
						sh "ansible-playbook ansible/playbook.yml -i ansible/inventory/Server_host.yml " 
					}
				}
			}
		}
}


