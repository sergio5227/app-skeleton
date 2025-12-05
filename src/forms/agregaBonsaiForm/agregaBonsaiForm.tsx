import { FormikProvider, useFormik } from "formik";
import {
    View,
    Keyboard,
    StyleSheet,
    ScrollView,
    Text,
    Image
} from "react-native";
import * as Yup from "yup";
import InputField from "../../components/InputField";
import { FC, useState } from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import SelectField from "../../components/SelectorField/SelectorField";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../../navigators/mainNavigator/mainNavigator";

interface AgregaBonsaiFormProps {
    onSubmit: (data: any) => void;
}

const AgregaBonsaiForm: FC<AgregaBonsaiFormProps> = (props: AgregaBonsaiFormProps) => {

    const navigation = useNavigation<NavigationProp<RootStackParams>>();
    const [foto, setFoto] = useState('');
    const formik = useFormik({
        initialValues: {
            nombre: "",
            nombreComun: "",
            especie: "",
            edad: "",
            medidas: "",
            ubicacion: "",
            descripcionHistoria: "",
        },
        enableReinitialize: true,
        onSubmit: async (values) => console.log(values),
        validationSchema: Yup.object({
            nombre: Yup.string()
                .min(4, "Minimo 4 caracteres")
                .max(250, "Maximo 250 caracteres")
                .required("Requerido"),
            nombreComun: Yup.string()
                .min(4, "Minimo 4 caracteres")
                .max(250, "Maximo 250 caracteres")
                .required("Requerido"),
            especie: Yup.string().required("Requerido"),
            edad: Yup.string()
                .min(1, "Minimo 1 caracter")
                .max(250, "Maximo 250 caracteres")
                .required("Requerido"),
            medidas: Yup.string()
                .min(4, "Minimo 4 caracteres")
                .max(250, "Maximo 250 caracteres")
                .required("Requerido"),
            ubicacion: Yup.string()
                .min(4, "Minimo 4 caracteres")
                .max(250, "Maximo 250 caracteres")
                .required("Requerido"),
            descripcionHistoria: Yup.string()
                .min(4, "Minimo 4 caracteres")
                .max(500, "Maximo 500 caracteres")
                .required("Requerido"),
        }),
    });

    return (
        <KeyboardAwareScrollView
            enableOnAndroid={true}
            extraScrollHeight={80}
            extraHeight={120}
            keyboardShouldPersistTaps="always"
            showsVerticalScrollIndicator={false}
        >
            <ScrollView
                keyboardShouldPersistTaps="always"
                contentInsetAdjustmentBehavior="always"
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <FormikProvider value={formik}>
                    <View style={{ flex: 1 }}>
                        <View style={{ marginBottom: 30 }}>
                            <Text>Foto portada del bonsai</Text>
                            {foto ? <View style={{ flex: 2, padding: 5 }}>
                                <Image source={{ uri: `data:image/png;base64,${foto}` }} style={{
                                    marginRight: 10,
                                    width: '100%',
                                    height: 400,
                                    borderRadius: 10
                                }} />
                            </View> : null}
                            <CustomButton
                                height={40}
                                title={foto ? 'Reemplazar foto de portada' : "Tomar foto de portada"}
                                onPress={() => {
                                    navigation.navigate("VisionCamera", {
                                        onComplete: (result: any) => {
                                            if (result.status === 'success') {
                                                console.log(result)
                                                setFoto(result?.base64)
                                            }
                                        }
                                    });
                                }}
                            />
                        </View>
                        <View style={{ marginBottom: 30 }}>
                            <InputField
                                returnKeyType="next"
                                name="nombre"
                                id="nombre"
                                label="Nombre o alias"
                                placeholder="Ingrese el nombre o alias del bonsai"
                                type="text"
                                formik={formik}
                            />
                        </View>
                        <View style={{ marginBottom: 30 }}>
                            <InputField
                                name="nombreComun"
                                multiline={true}
                                id="nombreComun"
                                label="Nombre común"
                                placeholder="Ingrese el nombre común como es conocida esta especie"
                                type="text"
                                formik={formik}
                            />
                        </View>
                        <View style={{ marginBottom: 30 }}>
                            <SelectField
                                label="Especie"
                                name="especie"
                                id="especie"
                                formik={formik}
                                placeholder="Selecciona un especie"
                                options={[
                                    { label: "BBVA", value: "bbva" },
                                    { label: "Santander", value: "santander" },
                                    { label: "Banorte", value: "banorte" },
                                ]}
                            />
                        </View>
                        <View style={{ marginBottom: 30 }}>
                            <InputField
                                name="edad"
                                multiline={true}
                                id="edad"
                                label="Edad"
                                placeholder="Ingrese la edad de este bonsai"
                                type="numeric"
                                formik={formik}
                            />
                        </View>
                        <View style={{ marginBottom: 30 }}>
                            <InputField
                                name="medidas"
                                multiline={true}
                                id="medidas"
                                label="Medidas"
                                placeholder="Ingrese la medidas de este bonsai"
                                type="text"
                                formik={formik}
                            />
                        </View>
                        <View style={{ marginBottom: 30 }}>
                            <InputField
                                name="ubicacion"
                                multiline={true}
                                id="ubicacion"
                                label="Ubicación"
                                placeholder="Ingrese la ubicacion de este bonsai (exterior, pleno sol, sombra etc)"
                                type="text"
                                formik={formik}
                            />
                        </View>
                        <View style={{ marginBottom: 30 }}>
                            <InputField
                                name="descripcionHistoria"
                                multiline={true}
                                id="descripcionHistoria"
                                label="descripcionHistoria"
                                placeholder="Ingrese la descripcionHistoria de este bonsai (exterior, pleno sol, sombra etc)"
                                type="text"
                                style={AgregaBonsaiFormStyle.textArea}
                                formik={formik}
                            />
                        </View>
                        <View style={{ marginBottom: 40 }}>
                            <CustomButton
                                disabled={
                                    !formik.isValid ||
                                    formik?.values?.nombre === "" ||
                                    formik?.values?.nombreComun === "" ||
                                    !formik?.values?.especie?.length ||
                                    formik?.values?.edad === "" ||
                                    formik?.values?.medidas === "" ||
                                    formik?.values?.ubicacion === "" ||
                                    formik?.values?.descripcionHistoria === "" ||
                                    !foto
                                }
                                height={40}
                                title={"Guardar"}
                                onPress={() => {
                                    Keyboard.dismiss();
                                    props.onSubmit({ ...formik?.values, foto });
                                }}
                            />
                        </View>
                    </View>
                </FormikProvider>
            </ScrollView>
        </KeyboardAwareScrollView>
    );
};

const AgregaBonsaiFormStyle = StyleSheet.create({
    textArea: {
        minHeight: 100,
        padding: 10,
        borderWidth: 1,
        borderRadius: 8,
    },
});

export default AgregaBonsaiForm;
