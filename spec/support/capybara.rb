headless_chrome_remote_capabilities = Selenium::WebDriver::Remote::Capabilities.chrome(
  chromeOptions: { args: %w(headless disable-gpu window-size=1440x768) }
)

remote_selenium_host = "http://chrome:4444/wd/hub"

Capybara.register_driver :selenium_chrome_headless_remote do |app|
  Capybara::Selenium::Driver.new(
    app,
    browser: :remote,
    desired_capabilities: headless_chrome_remote_capabilities,
    url: remote_selenium_host
  )
end

Capybara.register_driver :selenium_chrome_remote do |app|
  Capybara::Selenium::Driver.new(app,
    browser: :remote,
    desired_capabilities: :chrome,
    url: remote_selenium_host
  )
end

RSpec.configure do |config|
  config.before(:each, :js) do
    Capybara.app_host = "http://#{IPSocket.getaddress(Socket.gethostname)}:3001"
    # Capybara.app_host = "http://web:3001" # This is supposed to work but doesn't for me
    Capybara.server_host = "0.0.0.0"
    Capybara.server_port = "3001"

    driven_by :selenium_chrome_remote
  end
end
