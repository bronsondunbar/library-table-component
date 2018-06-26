
# Table Component

Table component for React

Install and save component as a dependency

```

npm install --save library-table-component

```

Import component into your app

```

import Table from 'library-table-component'

```

Create an array of objects for the table headers and content with the keys being data and content

```

const tableHeaderData = [
	{
		data: "Name"
	},
	{
		data: "Email"
	},
	{
		data: "Username"
	}
]

const tableContentData = [
	{
		content: [
			{
				data: "John"
			},
			{
				data: "john@doe.com"
			},
			{
				data: "@john"
			}
		]
	},
	{
		content: [
			{
				data: "Jane"
			},
			{
				data: "jane@doe.com"
			},
			{
				data: "@jane"
			}
		]
	},
	{
		content: [
			{
				data: "Jack"
			},
			{
				data: "jack@doe.com"
			},
			{
				data: "@jack"
			}
		]
	}
]

```

Render the component with the object arrays we created as well as any other props that are needed

```

render () {
	const tableHeaderData = [
		{
			data: "Name"
		},
		{
			data: "Email"
		},
		{
			data: "Username"
		}
	]

	const tableContentData = [
		{
			content: [
				{
					data: "John"
				},
				{
					data: "john@doe.com"
				},
				{
					data: "@john"
				}
			]
		},
		{
			content: [
				{
					data: "Jane"
				},
				{
					data: "jane@doe.com"
				},
				{
					data: "@jane"
				}
			]
		},
		{
			content: [
				{
					data: "Jack"
				},
				{
					data: "jack@doe.com"
				},
				{
					data: "@jack"
				}
			]
		}
	]

	return (
		<TableComponent
			tableHeaderData={tableHeaderData}
			tableContentData={tableContentData}
			tableTheme="light"
			tableBorder={false}
			tableStriped={true}
			tableHover={false} />
	)
}

```

| Prop             | Values        |
| :--------------- | :------------ |
| tableHeaderData  | Object        |
| tableContentData | Object        |
| tableTheme       | light or dark |
| tableBorder      | true or false |
| tableStriped     | true or false |
| tableHover       | true or false |
