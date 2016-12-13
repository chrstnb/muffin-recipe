			var numMuffins = prompt("how many muffins would you like to make?", "(a multiple of 6)");
			while (numMuffins % 6 != 0) {
				numMuffins = prompt("try again; it's gotta be a multiple of six", "(a multiple of 6)");
			}
			for (i=0;i<numMuffins / 6;i++) {
				var ingreedsSelection = d3.select("#ingreeds");

				var svgSelection = ingreedsSelection.append("svg")
					.attr("width", 100)
					.attr("height", 100);
				var ellipseSelection = svgSelection.append("ellipse")
					.attr("cx", 50)
					.attr("cy", 50)
					.attr("rx", 25)
					.attr("ry", 35)
					.style("fill", "#f9f5d9")

			};
			for (i=0;i<numMuffins/6;i++) {
				var svg = d3.select("#ingreeds")
                .append("svg")
                .attr("width", 100)
                .attr("height", 100);

	            var image = svg.selectAll("img").data([0]);
	                image.enter()
	                .append("svg:image")
	                .attr("xlink:href", "oats.png")
	                .attr("x", "0")
	                .attr("y", "0")
	                .attr("width", "100")
	                .attr("height", "100");
	        };
	        for (i=0;i<numMuffins/6;i++) {
	        	if (i<(numMuffins/6-1)) {
					var svg = d3.select("#ingreeds")
	                .append("svg")
	                .attr("width", 100)
	                .attr("height", 100);

		            var image = svg.selectAll("img").data([0]);
		                image.enter()
		                .append("svg:image")
		                .attr("xlink:href", "yogurtfull.png")
		                .attr("x", "0")
		                .attr("y", "0")
		                .attr("width", "100")
		                .attr("height", "100");
		            i++;
	        	} else {
	        		var svg = d3.select("#ingreeds")
	                .append("svg")
	                .attr("width", 100)
	                .attr("height", 100);

		            var image = svg.selectAll("img").data([0]);
		                image.enter()
		                .append("svg:image")
		                .attr("xlink:href", "yogurt.png")
		                .attr("x", "0")
		                .attr("y", "0")
		                .attr("width", "100")
		                .attr("height", "100");
	        	}
	        }
	        for (i=0;i<numMuffins/6;i++) {
	        	if (numMuffins/6 - i > 7) {
					var svg = d3.select("#ingreeds")
	                .append("svg")
	                .attr("width", 100)
	                .attr("height", 100);

		            var image = svg.selectAll("img").data([0]);
		                image.enter()
		                .append("svg:image")
		                .attr("xlink:href", "agave1.png")
		                .attr("x", "0")
		                .attr("y", "0")
		                .attr("width", "100")
		                .attr("height", "100");
		            i+=7;
	        	} else if (numMuffins/6-i >3) {
	        		var svg = d3.select("#ingreeds")
	                .append("svg")
	                .attr("width", 100)
	                .attr("height", 100);

		            var image = svg.selectAll("img").data([0]);
		                image.enter()
		                .append("svg:image")
		                .attr("xlink:href", "agave2.png")
		                .attr("x", "0")
		                .attr("y", "0")
		                .attr("width", "100")
		                .attr("height", "100");
		            i+=3;
	        	} else if (numMuffins/6-i>1) {
	        		var svg = d3.select("#ingreeds")
	                .append("svg")
	                .attr("width", 100)
	                .attr("height", 100);

		            var image = svg.selectAll("img").data([0]);
		                image.enter()
		                .append("svg:image")
		                .attr("xlink:href", "agave4.png")
		                .attr("x", "0")
		                .attr("y", "0")
		                .attr("width", "100")
		                .attr("height", "100");
		            i+=1;
	        	} else {
	        		var svg = d3.select("#ingreeds")
	                .append("svg")
	                .attr("width", 100)
	                .attr("height", 100);

		            var image = svg.selectAll("img").data([0]);
		                image.enter()
		                .append("svg:image")
		                .attr("xlink:href", "agave8.png")
		                .attr("x", "0")
		                .attr("y", "0")
		                .attr("width", "100")
		                .attr("height", "100");

	        	}
	        };
	        for (i=0;i<numMuffins/6;i++) {
				var svg = d3.select("#ingreeds")
                .append("svg")
                .attr("width", 100)
                .attr("height", 100);

	            var image = svg.selectAll("img").data([0]);
	                image.enter()
	                .append("svg:image")
	                .attr("xlink:href", "banana.png")
	                .attr("x", "10")
	                .attr("y", "10")
	                .attr("width", "80")
	                .attr("height", "80");
	        };
	        for (i=0;i<numMuffins/6;i++) {
	        	if (numMuffins/6 - i > 11) {
					var svg = d3.select("#ingreeds")
	                .append("svg")
	                .attr("width", 100)
	                .attr("height", 100);

		            var image = svg.selectAll("img").data([0]);
		                image.enter()
		                .append("svg:image")
		                .attr("xlink:href", "sodaT.png")
		                .attr("x", "0")
		                .attr("y", "0")
		                .attr("width", "100")
		                .attr("height", "100");
		            i+=11;
	        	} else if (numMuffins/6-i >3) {
	        		var svg = d3.select("#ingreeds")
	                .append("svg")
	                .attr("width", 100)
	                .attr("height", 100);

		            var image = svg.selectAll("img").data([0]);
		                image.enter()
		                .append("svg:image")
		                .attr("xlink:href", "soda1.png")
		                .attr("x", "0")
		                .attr("y", "0")
		                .attr("width", "100")
		                .attr("height", "100");
		            i+=3;
	        	} else if (numMuffins/6-i >1) {
	        		var svg = d3.select("#ingreeds")
	                .append("svg")
	                .attr("width", 100)
	                .attr("height", 100);

		            var image = svg.selectAll("img").data([0]);
		                image.enter()
		                .append("svg:image")
		                .attr("xlink:href", "soda2.png")
		                .attr("x", "0")
		                .attr("y", "0")
		                .attr("width", "100")
		                .attr("height", "100");
		            i+=1;
	        	} else {
	        		var svg = d3.select("#ingreeds")
	                .append("svg")
	                .attr("width", 100)
	                .attr("height", 100);

		            var image = svg.selectAll("img").data([0]);
		                image.enter()
		                .append("svg:image")
		                .attr("xlink:href", "soda4.png")
		                .attr("x", "0")
		                .attr("y", "0")
		                .attr("width", "100")
		                .attr("height", "100");

	        	}
	        };
	       	for (i=0;i<numMuffins/6;i++) {
	        	if (numMuffins/6 - i > 3) {
					var svg = d3.select("#ingreeds")
		                .append("svg")
		                .attr("width", 100)
		                .attr("height", 100);

		            var image = svg.selectAll("img").data([0]);
		                image.enter()
		                .append("svg:image")
		                .attr("xlink:href", "powderT.png")
		                .attr("x", "0")
		                .attr("y", "0")
		                .attr("width", "100")
		                .attr("height", "100");
		            i+=3;
	        	} else if (numMuffins/6-i >1) {
	        		var svg = d3.select("#ingreeds")
		                .append("svg")
		                .attr("width", 100)
		                .attr("height", 100);

		            var image = svg.selectAll("img").data([0]);
		                image.enter()
		                .append("svg:image")
		                .attr("xlink:href", "powder1.png")
		                .attr("x", "0")
		                .attr("y", "0")
		                .attr("width", "100")
		                .attr("height", "100");

		            var svg = d3.select("#ingreeds")
		                .append("svg")
		                .attr("width", 100)
		                .attr("height", 100);

		            var image = svg.selectAll("img").data([0]);
		                image.enter()
		                .append("svg:image")
		                .attr("xlink:href", "powder2.png")
		                .attr("x", "0")
		                .attr("y", "0")
		                .attr("width", "100")
		                .attr("height", "100");
		            i+=1;
	        	} else {
	        		var svg = d3.select("#ingreeds")
		                .append("svg")
		                .attr("width", 100)
		                .attr("height", 100);
	        		var image = svg.selectAll("img").data([0]);
		                image.enter()
		                .append("svg:image")
		                .attr("xlink:href", "powder2.png")
		                .attr("x", "0")
		                .attr("y", "0")
		                .attr("width", "100")
		                .attr("height", "100");
		            var svg = d3.select("#ingreeds")
		                .append("svg")
		                .attr("width", 100)
		                .attr("height", 100);
	        		var image = svg.selectAll("img").data([0]);
		                image.enter()
		                .append("svg:image")
		                .attr("xlink:href", "powder4.png")
		                .attr("x", "0")
		                .attr("y", "0")
		                .attr("width", "100")
		                .attr("height", "100");
	        	}
	        };
$( document ).ready(function() {
          $("svg").click(function(){
              $(this).hide();})
            });
 
