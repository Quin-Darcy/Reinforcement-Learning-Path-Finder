//==============Learning ALgorithms==============//
function epsilon_greedy(layer, epsilon, count) {
    let index;
    let p = random(0, 1);
    let avgs = get_path_averages(layer);

    if (epsilon === 0 && count === 0) {
        index = Math.floor(random(0, num_of_agents));
    } else if (p < epsilon) {
        index = Math.floor(random(0, num_of_agents));
    } else {
        index = avgs.indexOf(min(avgs));
    }

    return index;
}

/*function upper_confidence_bound(layer, epsilon, count) {
    let index;
    let p = random(0, 1);
    let avgs = get_path_averages(layer);

    for (let i = 0; i < num_of_agents; i++) {
        if (agents[layer][i].count > 0) {
            avgs[i] -= ucb_coeff * Math.sqrt(Math.log(frameCount) / agents[layer][i].count);
        } else {
            avgs[i] = 0;
        }
    }

    if (epsilon === 0 && count === 0) {
        index = Math.floor(random(0, num_of_agents));
    } else if (p < epsilon) {
        index = Math.floor(random(0, num_of_agents));
    } else {
        index = avgs.indexOf(min(avgs));
    }

    return index;
}*/

function lower_confidence_bound(layer, lcb, count) {
    let index = 0;
    if (layer === num_of_layers - 2) {
        index = epsilon_greedy(layer, 0.05, count);
        DECAY = 10/iters;
    } else {
        let avgs = get_path_averages(layer);

        for (let i = 0; i < num_of_agents; i++) {
            if (agents[layer][i].count > 0) {
                avgs[i] = avgs[i] / max_len;
                avgs[i] -= lcb*Math.sqrt(2*Math.log(frameCount) / agents[layer][i].count);
            } else {
                avgs[i] = -1;
            }
        }
        index = avgs.indexOf(min(avgs));
    }

    return index;
}