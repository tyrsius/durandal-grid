define(['knockout', 'durandal/app', 'services/randomData'], 
function (ko, app, randomData) {

	var data = [],
		peopleToGet = 5;

	while (peopleToGet-- > 0)
		data.push(randomData.getPerson());

    return {
        gridConfig: { data: data }
    };
});