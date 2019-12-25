terraform {
	backend "s3" {
		bucket = "deptno-tfstate"
		region = "ap-northeast-2"
		key = "layers.deptno.tfstate"
		encrypt = true
		profile = "deptno"
	}
}
