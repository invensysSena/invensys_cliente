import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

import moment from "moment-with-locales-es6";
moment.locale("es");
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFF",
  },
  section: {
    margin: 2,
    padding: 10,
    flexDirection: "rows",
  },
  header: {
    marginBottom: 1,
    fontSize: 20,
    width: 250,
    fontWeight: "bold",
    textAlign: "start",
  },
  sectionTitle: {
    marginBottom: 4,
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    fontSize: 11,
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    color: "#282828",
  },
  table: {
    display: "table",
    width: "auto",
    marginVertical: 1,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCell: {
    borderWidth: 0,
    borderColor: "#fff",
    padding: 2,
    borderRightWidth: 1,

    display: "block",
    fontSize: 9,
    width: "30.33%",
  },
});

export const ComprasPDF = ({ ventas, totalesProducts }) => {
  if (totalesProducts.length === 0) return null;

  const total = totalesProducts.reduce((a, b) => a + b.total, 0);
  const money = new Intl.NumberFormat("en-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 2,
  });
  const moneyDolar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return (
    <>
      {ventas.length > 0 && totalesProducts.length > 0 ? (
        <Document>
          <Page size="A4" style={styles.page}>
            <View
              // display flex is only for web
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "#FFFF",
                padding: 10,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  backgroundColor: "#FFFF",
                  padding: 10,
                  width: "400px",
                }}
              >
                <Text style={styles.header}>Factura Electrónica de Venta</Text>
                <Text style={styles.header}>{ventas[0].nombre}</Text>
                <Text style={styles.sectionTitle}>Datos del emisor:</Text>

                <Text
                  style={{
                    color: "#282828",
                    fontSize: 10,
                    marginVertical: 2,
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  Nombre Comercial: {ventas[0].nombre}
                </Text>
                <Text
                  style={{
                    color: "#282828",
                    fontSize: 10,
                    marginVertical: 2,
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  NIT:{ventas[0].nit}{" "}
                </Text>
                <Text
                  style={{
                    color: "#282828",
                    fontSize: 10,
                    marginVertical: 2,
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  Tipo de persona: {ventas[0].tipoPersona}{" "}
                </Text>
                <Text
                  style={{
                    color: "#282828",
                    fontSize: 10,
                    marginVertical: 2,
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  {ventas[0].tipoIdentificacion} : {ventas[0].numero}
                </Text>
                <Text
                  style={{
                    color: "#282828",
                    fontSize: 10,
                    marginVertical: 2,
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  Email: {ventas[0].correo}
                </Text>
                <Text
                  style={{
                    color: "#282828",
                    fontSize: 10,
                    marginVertical: 2,
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  Telefono: {ventas[0].telefono}
                </Text>
                <Text
                  style={{
                    color: "#282828",
                    fontSize: 10,
                    marginVertical: 2,
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  Dirección: {ventas[0].direccion}
                </Text>
                <Text
                  style={{
                    color: "#282828",
                    fontSize: 10,
                    marginVertical: 2,
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  Ciudad,Depart: {ventas[0].departamento} - {ventas[0].ciudad}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  backgroundColor: "#FFFF",
                  padding: 10,
                  width: "350px",
                }}
              >
                <Text style={styles.sectionTitle}>Más información</Text>
                <Text style={styles.text}>
                  Nombre: {ventas[0].nombreCliente}
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    marginVertical: 4,
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    color: "#777777",
                  }}
                >
                  Representación Gráfica Autorización Numeración de Facturación
                  Electrónica No. 18764042401530 de{" "}
                  {moment().subtract(10, "days").calendar()} - 03/01/2024
                  autoriza FV-1 a FV-5000
                </Text>
                <Image
                  style={{ width: 110, height: 110 }}
                  source={{
                    uri: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${ventas[0]._id}`,
                  }}
                />
              </View>
            </View>
            <View style={styles.section}>
              <Text
                style={{
                  color: "#000",
                  fontSize: 15,
                  marginVertical: 2,
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                Resumen de la venta
              </Text>
              <View style={styles.table}>
                <View
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "space-between",
                    backgroundColor: "#FFFF",
                    borderBottomWidth: 1,
                    borderBottomColor: "#777777",
                    borderTopWidth: 1,
                    borderTopColor: "#777777",
                    padding: 2,
                  }}
                >
                  <Text style={[styles.tableCell, styles.text]}>No.</Text>
                  <Text style={[styles.tableCell, styles.text]}>Nombre</Text>
                  <Text style={[styles.tableCell, styles.text]}>REF</Text>

                  <Text style={[styles.tableCell, styles.text]}>Cantidad</Text>
                  <Text style={[styles.tableCell, styles.text]}>INC</Text>

                  <Text style={[styles.tableCell, styles.text]}>Fecha</Text>
                  <Text style={[styles.tableCell, styles.text]}>Total</Text>
                </View>

                {totalesProducts.map((item, i) => (
                  <View style={styles.tableRow} key={i}>
                    <Text style={[styles.tableCell, styles.text]}>{i + 1}</Text>
                    <Text style={[styles.tableCell, styles.text]}>
                      {item.nameProduct}
                    </Text>
                    <Text style={[styles.tableCell, styles.text]}>
                      {"" + i + 1}
                    </Text>
                    <Text style={[styles.tableCell, styles.text]}>
                      {item.unidades}
                    </Text>
                    <Text style={[styles.tableCell, styles.text]}>0%</Text>
                    <Text style={[styles.tableCell, styles.text]}>
                      {moment(item.createdAt).format("D MMMM YYYY")}
                    </Text>
                    <Text style={[styles.tableCell, styles.text]}>
                      {moneyDolar.format(item.total)}
                    </Text>
                  </View>
                ))}
              </View>

              <View style={styles.table}>
                <View
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "space-between",
                    backgroundColor: "#FFFF",

                    borderTopWidth: 1,
                    borderTopColor: "#777777",
                    padding: 2,
                  }}
                >
                  <Text style={[styles.tableCell, styles.text]}></Text>
                  <Text style={[styles.tableCell, styles.text]}></Text>

                  <Text style={[styles.tableCell, styles.text]}></Text>
                  <Text style={[styles.tableCell, styles.text]}></Text>
                  <Text style={[styles.tableCell, styles.text]}></Text>
                </View>
                <View style={styles.tableRow}>
                  <Text style={[styles.tableCell, styles.text]}></Text>
                  <Text style={[styles.tableCell, styles.text]}></Text>
                  <Text style={[styles.tableCell, styles.text]}></Text>
                  <Text style={[styles.tableCell, styles.text]}></Text>
                  <Text style={[styles.tableCell, styles.text]}>
                    Total : {money.format(total)}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: 10,
                position: "absolute",
                bottom: 0,
                width: "100%",
                margin: "auto",
              }}
            >
              <View style={styles.section}>
                <Text
                  style={{
                    fontSize: 10,
                    color: "#777777",
                  }}
                >
                  Firma
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    marginVertical: 4,
                    color: "#777777",
                  }}
                >
                  __________________________________
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    color: "#777777",
                  }}
                >
                  Nombre:{" "}
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    marginVertical: 4,
                    color: "#777777",
                  }}
                >
                  C.C:{" "}
                </Text>
              </View>
              <View style={styles.section}>
                <Text
                  style={{
                    fontSize: 10,
                    color: "#777777",
                  }}
                >
                  Aclaración de firma
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    marginVertical: 4,
                    color: "#777777",
                  }}
                >
                  __________________________________
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    marginVertical: 4,
                    color: "#777777",
                  }}
                >
                  Nombre:{" "}
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    marginVertical: 4,
                    color: "#777777",
                  }}
                >
                  C.C:{" "}
                </Text>
              </View>
            </View>
          </Page>
        </Document>
      ) : (
        <Text style={styles.sectionTitle}>No hay datos para mostrar</Text>
      )}
    </>
  );
};
