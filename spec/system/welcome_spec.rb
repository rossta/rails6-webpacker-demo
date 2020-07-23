require 'rails_helper'

RSpec.describe "Welcome", type: :system do
  before do
    driven_by(:selenium_chrome_headless)
  end

  it 'should render javascript pack' do
    visit "/"

    expect(page).to have_content('Dynamic content!')
  end
end
