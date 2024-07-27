pids=()
# すべてのチェックに成功しないとgit pushできないようにする
commands=(
  "pnpm lint:cache"
  "pnpm fmt"
  "pnpm typecheck"
  "pnpm spellcheck"
  "pnpm find-deadcode"
  "pnpm prevent-main"
)

for command in "${commands[@]}"; do
  ${command} &
  pids+=($!)
done

for pid in ${pids[@]}; do
  wait $pid
  if [ $? -ne 0 ]; then
    exit 1
  fi
done