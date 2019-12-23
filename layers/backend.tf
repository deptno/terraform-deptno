terraform {
	backend s3 {
		bucket = "deptno-tfstate"
		region = "ap-northeast-2"
		key = "deptno.tfstate"
		encrypt = true
		dynamodb_table = "detpno-tfstate"
		profile = "deptno"
	}
}
