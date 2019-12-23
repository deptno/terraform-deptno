resource "aws_dynamodb_table" "deptno_tfstate" {
	name = "deptno_tfstate"
	hash_key = "LockID"
	billing_mode = "PAY_PER_REQUEST"
	
	attribute {
		name = "LockID"
		type = "S"
	}
}
resource aws_s3_bucket deptno_tfstate {
	bucket = "deptno_tfstate"
	acl = "private"
	force_destroy = "false"
	logging {
		target_bucket = aws_s3_bucket.deptno_tfstate_log.id
	}
	versioning {
		enabled = true
	}
}
resource aws_s3_bucket deptno_tfstate_log {
	bucket = "deptno_tfstate_log"
	acl = "log-delivery-write"
	force_destroy = false
}
