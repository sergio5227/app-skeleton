import { FormikProvider, useFormik } from "formik";
import { View, Keyboard, StyleSheet } from "react-native"
import * as Yup from "yup";
import InputField from "../../components/InputField";
import { FC } from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

interface ContactoFormProps {
    onSubmit: (data: any) => void
}

const ContactoForm: FC<ContactoFormProps> = (props: ContactoFormProps) => {

    const formik = useFormik({
        initialValues: {
            telefono: "",
            mensaje: ""
        },
        enableReinitialize: true,
        onSubmit: async (values) => console.log(0),
        validationSchema: Yup.object({
            telefono: Yup.string().matches(/^[0-9]{7,12}$/, 'Formato incorrecto').required("Requerido"),
            mensaje: Yup.string()
                .min(4, 'Minimo 4 caracteres')
                .max(500, 'Maximo 500 caracteres').required("Requerido")
        }),
    });

    console.log(formik.isValid);

    return (
        <KeyboardAwareScrollView
            enableOnAndroid={true}
            extraScrollHeight={80}
            extraHeight={120}
            keyboardShouldPersistTaps="always"
            showsVerticalScrollIndicator={false}
        >
            <View style={{ flex: 1 }} >
                <FormikProvider value={formik}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <View style={{ height: 105 }}>
                                <InputField
                                    returnKeyType="next"
                                    name="telefono"
                                    id="telefono"
                                    label="Número de teléfono"
                                    placeholder="Ingrese su número de teléfono"
                                    type="numeric"
                                    formik={formik}
                                />
                            </View>
                            <View style={{ height: 110, marginBottom: 50 }}>
                                <InputField
                                    name="mensaje"
                                    multiline={true}
                                    style={ContactoFormStyle.textArea}
                                    id="mensaje"
                                    label="Mensaje"
                                    placeholder="Ingrese el mensaje que desea enviarnos"
                                    type="text"
                                    formik={formik}
                                />
                            </View>
                        </View>
                        <View>
                            <CustomButton
                                disabled={!formik.isValid || formik?.values?.telefono === '' || formik?.values?.mensaje === ''}
                                height={40}
                                title={'Enviar'}
                                onPress={() => {
                                    Keyboard.dismiss();
                                    props.onSubmit(formik?.values);
                                }}
                            />
                        </View>
                    </View>
                </FormikProvider>
            </View>
        </KeyboardAwareScrollView>
    )
}


const ContactoFormStyle = StyleSheet.create({
    textArea: {
        borderWidth: 1,
        minHeight: 100,
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
    }
});



export default ContactoForm;