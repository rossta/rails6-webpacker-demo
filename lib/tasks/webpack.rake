namespace :webpack do
  task :build_json do
    system "RAILS_ENV=#{ENV.fetch('RAILS_ENV', 'production')} \
      NODE_ENV=#{ENV.fetch('NODE_ENV', 'production')} \
      bin/webpack --json > tmp/webpack-stats.json"
  end
  task :analyze_json do
    system "npx webpack-bundle-analyzer tmp/webpack-stats.json public/packs"
  rescue Interrupt
  end
  desc "Analyze the webpack build"
  task :analyze => [:build_json, :analyze_json]
end
