# Commands
.PHONY: list
list:
	@echo "📋 Available commands:"
	@awk -F':.*?## ' '/^[a-zA-Z0-9_-]+:/ && !/^[[:blank:]]*list:/ { if ($$2 == "") { printf "   • %s\n", $$1 } else { printf "   • %-20s %s\n", $$1, $$2 } }' $(MAKEFILE_LIST)

.PHONY: start 
start: ## 💠 Starts Docusaurus dev environment
	pnpm start

.PHONY: swizzle
swizzle: ## 📤 Swizzle typescript components
	pnpm swizzle --typescript

.PHONY: build
build: ## 🏗️  Build static website
	pnpm build

.PHONY: serve
serve: ## 🍽  Serve built static website
	pnpm serve

.PHONY: index-search
index-search: ## 🔎 Build index for Algolia search
	pnpm index-search

.PHONY: encrypt-env
encrypt-env: ## 🔒 Encrypts the .env file
	@stty -echo; \
	read -p "Enter passphrase: " passphrase && echo; \
	stty echo; \
	openssl enc -aes-256-cbc -salt -in .env -out .env.enc -pass pass:$$passphrase -pbkdf2
	@echo "🔒 .env encrypted and saved to .env.enc"

.PHONY: decrypt-env
decrypt-env: ## 🔐 Decrypts the .env.enc file
	@echo "This will overwrite the .env file. Are you sure?[y/N]"
	@read -p "" confirm; \
	if [ "$$confirm" = "y" ] || [ "$$confirm" = "Y" ]; then \
		stty -echo; \
		read -p "Enter passphrase: " passphrase && echo; \
		stty echo; \
		if openssl enc -aes-256-cbc -d -in .env.enc -out .env -pass pass:$$passphrase -pbkdf2; then \
			echo "🔐 .env.enc successfully decrypted and saved to .env"; \
		else \
			echo "⛔️ Decryption failed. Please check the passphrase and try again."; \
			rm -f .env; \
		fi; \
	else \
		echo "Database reset aborted."; \
	fi
