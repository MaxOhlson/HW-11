// extend imports as needed
import {
    parse, list, pair
} from 'sicp';
import {
    evaluate, tagged_list_to_record, setup_environment, make_lambda_expression, make_application, make_name, make_literal, scan_out_declarations, list_of_unassigned, extend_environment 
} from '../src/mce';

const empty_env = setup_environment();
const comp = tagged_list_to_record(["literal", [20, null]]); 


test("A literal of 20 is a literal of 20", () => {
    expect(evaluate(comp, empty_env)).toEqual(20); 
});

const env = setup_environment();
const literal_5 = list("literal", 5);
const lambda = parse("x => x * x;");
const lambda_25 = list("unary_operator_combination", "lambda", literal_5);
const new_env = extend_environment(list("lambda"), list(evaluate(lambda, env)), env);
expect(evaluate(lambda_25, env)).toBe(25);
