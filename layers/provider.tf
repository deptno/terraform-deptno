provider aws {
  region  = "ap-northeast-2"
  profile = "deptno"
}
provider aws {
  region  = "us-east-1"
  alias   = "virginia"
  profile = "deptno"
}
provider aws {
  region  = "us-west-2"
  alias   = "oregon"
  profile = "deptno"
}

