resource aws_lambda_layer_version chrome {
	layer_name = "chrome"
	filename = "chrome_aws_lambda.zip"
	compatible_runtimes = [
		"nodejs12.x"
	]
}
