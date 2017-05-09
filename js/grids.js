(function() {

	var
	createDiv = function() {
		
		return ROCK.JQUERY.createNode("div");
		
	};

	var Grid = ROCK.prop("Grid", ROCK.createClass("DYNAMIC", Object, function Grid(columnSize, marginSize, columnCount) {
		
		this.columnSize = columnSize;
		this.marginSize = marginSize;
		this.halfMargin = (marginSize/2);
		this.columnCount = columnCount;
		Grids.append(this);
		
	}));
	Grid.prop("generatePlaceholder", function(span) {
		
		var
		_this = this,
		width = ((span*_this.columnSize)+(_this.marginSize*(span-1))),
		placeholder = ROCK.JQUERY.createNode("div").attr("data-grid-role", "placeholder").css({
			"width": width,
			"margin-left": _this.halfMargin,
			"margin-right": _this.halfMargin
		}).html("<div data-grid-placeholder-role=\"head\">" + width + "<span class=\"small\">px</span></div><div data-grid-placeholder-role=\"body\">" + span + "</div>");
		
		return placeholder;
		
	});
	Grid.prop("generatePlaceholderGroup", function(counts) {
			
		var 
		_this = this,
		group = ROCK.JQUERY.createNode("div").attr("data-grid-role", "placeholder-group"),
		loop = counts.length;
		
		while(loop--) {
			
			_this.generatePlaceholder(counts[loop]).prependTo(group);
		
		};
		
		ROCK.JQUERY.createNode("div").attr("data-role", "clear").appendTo(group);
		
		return group;
		
	});
	Grid.prop("getDisplayName", function() {
		
		return (this.columnSize + " " + this.marginSize + " " + this.columnCount);
		
	});
	Grid.prop("toHTML", function toHTML() {
		
		var
		_this = this,
		grid = ROCK.JQUERY.createNode("div").attr("data-role", "grid"),
		gridHead = ROCK.JQUERY.createNode("div").attr("data-grid-role", "head").html(_this.getDisplayName()).appendTo(grid),
		gridBody = ROCK.JQUERY.createNode("div").attr("data-grid-role", "body").css({
			"padding-left": _this.halfMargin,
			"padding-right": _this.halfMargin
		}).appendTo(grid),
		gridBodyInner = ROCK.JQUERY.createNode("div").attr("data-grid-role", "body-inner").appendTo(gridBody),
		columns = _this.columnCount,
		columnWrap = ROCK.JQUERY.createNode("div").attr("data-grid-role", "column-wrap").appendTo(gridBodyInner),
		placeholderGroup = ROCK.JQUERY.createNode("div").attr("data-grid-role", "placeholder-group").appendTo(gridBodyInner);
		
		while(columns--) {
			
			ROCK.JQUERY.createNode("div").attr("data-grid-role", "column").css({
				"width": _this.columnSize,
				"margin-left": _this.halfMargin,
				"margin-right": _this.halfMargin,
				"height": 800
			}).appendTo(columnWrap);
		
		};
		
		_this.generatePlaceholderGroup([12]).appendTo(placeholderGroup);
		_this.generatePlaceholderGroup([6, 6]).appendTo(placeholderGroup);
		_this.generatePlaceholderGroup([4, 4, 4]).appendTo(placeholderGroup);
		_this.generatePlaceholderGroup([3, 3, 3, 3]).appendTo(placeholderGroup);
		_this.generatePlaceholderGroup([2, 2, 2, 2, 2, 2]).appendTo(placeholderGroup);
		_this.generatePlaceholderGroup([1, 11]).appendTo(placeholderGroup);
		_this.generatePlaceholderGroup([2, 10]).appendTo(placeholderGroup);
		_this.generatePlaceholderGroup([3, 9]).appendTo(placeholderGroup);
		_this.generatePlaceholderGroup([4, 8]).appendTo(placeholderGroup);
		_this.generatePlaceholderGroup([5, 7]).appendTo(placeholderGroup);
		
		return grid;
		
	});
	
	var Grids = ROCK.prop("Grids", ROCK.createClass("STATIC", ROCK.Collection, function Grids() {}));
	Grids.prop("toHTML", function toHTML() {
		
		var
		grids = ROCK.JQUERY.createNode("div");
		
		this.each(function(grid) {
			
			grid.toHTML().appendTo(grids);
			
		});
		
		return grids;
	
	});
	
})();