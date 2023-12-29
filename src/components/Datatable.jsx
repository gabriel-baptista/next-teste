import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { DataGrid, GridToolbar, ptBR } from "@mui/x-data-grid";
import jsonData from "../data/announcements.json";

const Datatable = () => {
    const [data, setData] = useState(null);

  //  pegando os dados do arquivo json
  useEffect(() => {
    try {
      setData(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.error("Erro ao obter dados do JSON:", error);
    }
  }, []);

  const [expandedRowId, setExpandedRowId] = useState(null);
  const [expandedGroupRowId, setExpandedGroupRowId] = useState(null);

  // funcao para expandir a linha
  const handleExpandClick = (id) => {
    setExpandedRowId(expandedRowId === id ? null : id);
  };

  const handleExpandGroupClick = (id) => {
    setExpandedGroupRowId(expandedGroupRowId === id ? null : id);
  };

  // objeto com as colunas da tabela
  const columns = [
    { field: "ads_id", headerName: "ID", flex: 1, minWidth: 150 },
    { field: "name", headerName: "NOME", flex: 1, minWidth: 400 },
    { field: "sku", headerName: "SKU", flex: 1, minWidth: 100 },
    { field: "modality", headerName: "MODALIDADE", flex: 1, minWidth: 200 },
    { field: "value", headerName: "VALOR", flex: 1, minWidth: 100 },
    { field: "quantity", headerName: "QUANTIDADE", flex: 1, minWidth: 150 },
    { field: "total_value", headerName: "VALOR TOTAL", flex: 1, minWidth: 150 },
    { field: "sale_fee", headerName: "TAXA DE VENDA", flex: 1, minWidth: 150 },
    {
      field: "shipping_price",
      headerName: "PREÇO DO FRETE",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "shipping_payed",
      headerName: "FRETE PAGO",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "shipping_discount",
      headerName: "DESCONTO DO FRETE",
      flex: 1,
      minWidth: 150,
    },
    { field: "cost", headerName: "CUSTO", flex: 1, minWidth: 150 },
    { field: "total_cost", headerName: "CUSTO TOTAL", flex: 1, minWidth: 150 },
    { field: "tax", headerName: "IMPOSTO", flex: 1, minWidth: 150 },
    { field: "income", headerName: "RENDA", flex: 1, minWidth: 150 },
    {
      field: "profit_value",
      headerName: "VALOR DO LUCRO",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "profit_sale",
      headerName: "LUCRO DE VENDA",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "profit_item",
      headerName: "ITEM DE LUCRO",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "is_registered",
      headerName: "REGISTRADO?",
      flex: 1,
      minWidth: 200,
    },
    {
      field: "orderDetail",
      headerName: "Detalhes do Pedido",
      sortable: false,
      width: 200,
      renderCell: (params) => (
        <Button
          variant="contained"
          // color="primary"
          size="small"
          onClick={() => handleExpandClick(params.id)}
        >
          Expandir
        </Button>
      ),
    },
    {
      field: "ordersGroup",
      headerName: "Grupo do Pedido",
      sortable: false,
      width: 200,
      renderCell: (params) => (
        <Button
          variant="contained"
          // color="primary"
          size="small"
          onClick={() => handleExpandGroupClick(params.id)}
        >
          Expandir
        </Button>
      ),
    },
  ];

  
  const rowsWithDetails = data
    ? data.reduce((newRows, row) => {
        newRows.push(row);

        if (row.ads_id === expandedRowId) {
          row.orders_detail.forEach((orderDetail) => {
            // console.log(orderDetail.order_id + "teste");
            newRows.push({
              ads_id: `ORDER_ID: ${orderDetail.order_id}`,
              name: `${orderDetail.name}`,
              sku: `${orderDetail.sku}`,
              modality: `LOGISTICA: ${orderDetail.logistic_type}`,
              value: `${orderDetail.value}`,
              quantity: `${orderDetail.quantity}`,
              total_value: `${orderDetail.total_value}`,
              sale_fee: `${orderDetail.sale_fee}`,
              shipping_price: `${orderDetail.shipping_price}`,
              shipping_payed: `${orderDetail.shipping_payed}`,
              shipping_discount: `${orderDetail.shipping_discount}`,
              cost: `${orderDetail.cost}`,
              total_cost: `${orderDetail.total_cost}`,
              tax: `${orderDetail.tax}`,
              income: `${orderDetail.income}`,
              profit_value: `${orderDetail.profit_value}`,
              profit_sale: `${orderDetail.profit_sale}`,
              profit_item: `${orderDetail.profit_item}`,
              is_registered: `CANCELADO? ${orderDetail.is_cancel}`,
            });
          });
        }
        else if (row.ads_id === expandedGroupRowId) {
          row.orders_group.forEach((orders_group) => {
            newRows.push({
              ads_id: `ORDER_GROUP: ${orders_group.order_id}`,
              name: `${orders_group.name}`,
              sku: `${orders_group.sku}`,
              modality: `N/A`,
              value: `${orders_group.value}`,
              quantity: `${orders_group.quantity}`,
              total_value: `${orders_group.total_value}`,
              sale_fee: `${orders_group.sale_fee}`,
              shipping_price: `${orders_group.shipping_price}`,
              shipping_payed: `${orders_group.shipping_payed}`,
              shipping_discount: `${orders_group.shipping_discount}`,
              cost: `${orders_group.cost}`,
              total_cost: `${orders_group.total_cost}`,
              tax: `${orders_group.tax}`,
              income: `${orders_group.income}`,
              profit_value: `${orders_group.profit_value}`,
              profit_sale: `${orders_group.profit_sale}`,
              profit_item: `${orders_group.profit_item}`,
              is_registered: `N/A`,
            });
          });
        }

        return newRows;
      }, [])
    : [];


    return (
        <div style={{ height: "85vh", width: "100%" }}>
        <DataGrid
          getRowId={(row) => row.ads_id}
          rows={rowsWithDetails}
          columns={columns}
          slots={{
            toolbar: GridToolbar,
          }}
          pageSizeOptions={[5, 10, 100]}
          rowsPerPageOptions={[5]}
          localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
        />
      </div>
    );
}

export default Datatable;