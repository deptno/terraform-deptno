data aws_dynamodb_table state {
	name         = "deptno_tfstate"
}
terraform {
	backend "s3" {
		bucket = "deptno_state"
		region = "ap-northeast-2"
		key = "deptno.tfstate"
		encrypt = true
		dynamodb_table = "detpno_tfstate"
	}
}
