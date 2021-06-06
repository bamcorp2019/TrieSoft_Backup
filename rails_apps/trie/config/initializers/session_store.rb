# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_trie_session',
  :secret      => '9a218a5dc55e411722c0bb412f076f42e085492c030d4e6480abd6b12a84b4ba755379f5c51d73c64225a0f7291fe245727d2d0060d213dbc6dfb1a019bbdae8'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
