require 'rails_helper'

RSpec.describe 'Welcome', :js do
  it 'displays properly' do
    visit '/'

    expect(page).to have_content('Welcome')
  end
end
