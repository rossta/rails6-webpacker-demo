class WelcomeController < ApplicationController
  def index
    gon.pages << "nonpage"
    gon.pages << "welcome/show"
  end
end
