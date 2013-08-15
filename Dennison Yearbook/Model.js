
guidedModel =// @startlock
{
	Photo :
	{
		entityMethods :
		{// @endlock
			fixName:function(name)
			{// @lock
				// Add your code here
				this.fileName = name;
				this.save();
				this.autoDispatch();
			}// @startlock
		},
		methods :
		{// @endlock
			returnAlert:function()
			{// @lock
				// Add your code here
				return "ReturnAlertFunctionResponse";
			}// @startlock
		}
	}
};// @endlock
