app = proc do |env|
    message = "It works!\n"
    version = "Ruby %s\n" % RUBY_VERSION
    response = [message, version].join("\n")
    [200, {"Content-Type" => "text/plain"}, [response]]
end


run app
