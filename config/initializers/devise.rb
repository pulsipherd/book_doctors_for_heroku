Devise.setup do |config|
  config.secret_key = Rails.env.production? ? ENV['DEVISE_SECRET_KEY'] : '11157e79663b33b82f6862b25b6f8059d55626188a6e97d9f40674ef17456e7874779310754777edd36baffa7309ed935db515784f13638fabde709eb3111703'
end