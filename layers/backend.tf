data aws_dynamodb_table state {
	name = "deptno-tfstate"
}
terraform {
	backend = "s3"
	config = {
		bucket = "deptno-tfstate"
		key = "deptno.tfstate"
		encrypt = true
		dynamodb_table = "detpno-tfstate"
		region = "ap-northeast-2"
		profile = "deptno"
	}
}
