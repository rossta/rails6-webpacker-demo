Rails.application.routes.draw do
  root to: 'welcome#index'

  mount Alchemy::Engine => '/'
end
