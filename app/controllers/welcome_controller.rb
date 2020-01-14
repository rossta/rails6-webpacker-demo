class WelcomeController < ApplicationController
  def index
  end

  def map
    render json: {features: []}
  end
end
