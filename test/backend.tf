terraform {
	backend "s3" {
		bucket = "deptno-tfstate"
		region = "ap-northeast-2"
		key = "test.deptno.tfstate"
		encrypt = true
		profile = "deptno"
	}
}
