#!/usr/bin/env bash

cd $(dirname "${BASH_SOURCE[0]}")/..

eslint=$(npm bin)/eslint

final_exit=0

run_test_case() {
    local test_case=$1
    local test_case_dir="tests/${test_case}"
    local eslint_test="$eslint --config ${test_case_dir}/eslint.config.js --no-ignore"

    $eslint_test ${test_case_dir}/pass.fixture.js > /dev/null
    if [[ "$?" == "0" ]]; then
        echo "PASS: ${test_case_dir}/pass.fixture.js"
    else
        echo "FAIL: ${test_case_dir}/pass.fixture.js"
        final_exit=1
    fi

    ! $eslint_test ${test_case_dir}/fail.fixture.js > /dev/null
    if [[ "$?" == "0" ]]; then
        echo "PASS: ${test_case_dir}/fail.fixture.js"
    else
        echo "FAIL: ${test_case_dir}/fail.fixture.js"
        final_exit=1
    fi
}

run_test_case "base"
run_test_case "tab"

exit $final_exit
