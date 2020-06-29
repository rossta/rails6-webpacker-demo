class WelcomeController < ApplicationController
  def index
    gon.features = %w[posts comments largeComponents]
  end
end
