RSpec.configure do |config|

  # Avoid race conditions by precompiling Webpacker for integration and system specs
  config.when_first_matching_example_defined(type: %r{system|controller|request}) do
    Webpacker.compile
  end
end
