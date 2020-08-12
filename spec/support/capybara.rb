remote_chrome_host = "http://chrome:4444/"

# First, load Cuprite Capybara integration
require "capybara/cuprite"

# Then, we need to register our driver to be able to use it later
# with #driven_by method.
Capybara.register_driver(:cuprite) do |app|
  Capybara::Cuprite::Driver.new(
    app,
    **{
      window_size: [1200, 800],
      # See additional options for Dockerized environment in the respective section of this article
      browser_options: { "no-sandbox" => nil },
      # Increase Chrome startup wait time (required for stable CI builds)
      process_timeout: 10,
      # Enable debugging capabilities
      inspector: true,
      # Allow running Chrome in a headful mode by setting HEADLESS env
      # var to a falsey value
      headless: !ENV["HEADLESS"].in?(%w[n 0 no false]),
      # Remote chrome docker
      url: ENV['CHROME_URL']
    }
  )
end

# Configure Capybara to use :cuprite driver by default
Capybara.default_driver = Capybara.javascript_driver = :cuprite

RSpec.configure do |config|
  config.before(:each, :js) do
    Capybara.app_host = "http://#{IPSocket.getaddress(Socket.gethostname)}:3001"
    # Capybara.app_host = "http://test:3001" # This is supposed to work but doesn't for me
    Capybara.server_host = "0.0.0.0"
    Capybara.server_port = "3001"

    driven_by Capybara.javascript_driver
  end
end
