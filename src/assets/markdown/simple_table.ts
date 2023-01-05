import { IMdElement } from '@/store';

const content:IMdElement = {
  children: [
    {
      name: 'paragraph',
      children: [
        { content: 'asdasd asdad sa' },
        { content: ' ' },
        {
          content: 'bold',
          bold: true,
        },
        { content: ' ' },
        {
          content: 'itealic',
          italic: true,
        },
        { content: ' ' },
        {
          content: 'bold itealic',
          bold: true,
          italic: true,
        },
        { lineBreak: true },
        { content: 'another line.' },
      ],
    },
    {
      name: 'h1',
      children: [
        { content: 'h1' },
      ],
    },
    {
      name: 'h5',
      children: [
        { content: 'h5' },
      ],
    },
    {
      name: 'table',
      children: [
        {
          name: 'tr',
          children: [
            {
              name: 'td',
              children: [
                { content: 'nr' },
              ],
            },
            {
              name: 'td',
              children: [
                { content: 'Description' },
              ],
            },
            {
              name: 'td',
              children: [
                { content: 'Unit Price' },
              ],
            },
            {
              name: 'td',
              children: [
                { content: 'Unit' },
              ],
            },
            {
              name: 'td',
              children: [
                {
                  content: 'Total',
                  bold: true,
                  italic: false,
                },
              ],
            },
          ],
        },
        {
          name: 'tr',
          children: [
            {
              name: 'td',
              children: [
                { content: '1' },
              ],
            },
            {
              name: 'td',
              children: [
                { content: 'Development' },
              ],
            },
            {
              name: 'td',
              children: [
                { content: '$100' },
              ],
            },
            {
              name: 'td',
              children: [
                { content: '3 hrs' },
              ],
            },
            {
              name: 'td',
              children: [
                { content: '$300' },
              ],
            },
          ],
        },
        {
          name: 'tr',
          children: [
            {
              name: 'td',
              children: [
                { content: '2' },
              ],
            },
            {
              name: 'td',
              children: [
                { content: 'Analysis' },
              ],
            },
            {
              name: 'td',
              children: [
                { content: '$140' },
              ],
            },
            {
              name: 'td',
              children: [
                { content: '1 hrs' },
              ],
            },
            {
              name: 'td',
              children: [
                { content: '$140' },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default content;
