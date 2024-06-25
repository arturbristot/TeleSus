import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Privacidade() {
  return (
    <View style={styles.cont1}>
        <View style={styles.cont2}>
            <Text style={styles.title1}>Leia os Termos a Seguir</Text>
            <ScrollView style={styles.container}>
            <Text style={styles.title}>Termos de Segurança do TeleSUS</Text>
            
            <Text style={styles.sectionTitle}>1. Introdução</Text>
            <Text style={styles.paragraph}>
                O TeleSUS é um sistema especializado em fornecer atendimento online de saúde, garantindo acesso a serviços médicos e de suporte à saúde através de plataformas digitais. A segurança dos dados e a privacidade dos usuários são prioridades fundamentais. Este documento estabelece os termos de segurança que regem o uso do TeleSUS, assegurando a proteção das informações dos usuários e a integridade dos serviços oferecidos.
            </Text>

            <Text style={styles.sectionTitle}>2. Coleta e Uso de Dados</Text>
            <Text style={styles.paragraph}>
                O TeleSUS coleta informações pessoais e médicas dos usuários para proporcionar um atendimento personalizado e eficaz. Esses dados incluem, mas não se limitam a:
            </Text>
            <Text style={styles.bulletPoint}>• Informações de contato (nome, endereço de e-mail, número de telefone)</Text>
            <Text style={styles.bulletPoint}>• Dados médicos e históricos de saúde</Text>
            <Text style={styles.bulletPoint}>• Informações demográficas</Text>
            <Text style={styles.paragraph}>
                Esses dados são utilizados exclusivamente para fins de atendimento médico, análise de saúde e melhoria contínua dos serviços prestados. O TeleSUS compromete-se a não compartilhar informações pessoais dos usuários com terceiros sem o devido consentimento, exceto quando exigido por lei.
            </Text>

            <Text style={styles.sectionTitle}>3. Armazenamento de Dados</Text>
            <Text style={styles.paragraph}>
                Os dados coletados pelo TeleSUS são armazenados em servidores seguros, protegidos por tecnologias avançadas de criptografia e medidas de segurança física e digital. Os servidores estão localizados em instalações com acesso restrito e monitoramento constante para prevenir acessos não autorizados.
            </Text>

            <Text style={styles.sectionTitle}>4. Acesso aos Dados</Text>
            <Text style={styles.paragraph}>
                Somente pessoal autorizado do TeleSUS, que passou por treinamento específico em privacidade e segurança de dados, tem acesso às informações dos usuários. Qualquer acesso não autorizado ou suspeito será investigado e tratado com a máxima seriedade, podendo resultar em medidas disciplinares e ações legais.
            </Text>

            <Text style={styles.sectionTitle}>5. Segurança nas Comunicações</Text>
            <Text style={styles.paragraph}>
                Todas as comunicações realizadas através do TeleSUS, incluindo videochamadas, mensagens de texto e transferência de documentos, são protegidas por criptografia de ponta a ponta. Isso garante que as informações trocadas entre o usuário e o profissional de saúde sejam acessíveis apenas às partes envolvidas.
            </Text>

            <Text style={styles.sectionTitle}>6. Políticas de Senha</Text>
            <Text style={styles.paragraph}>
                Os usuários do TeleSUS são incentivados a criar senhas fortes e únicas para acessar suas contas. É recomendado que as senhas:
            </Text>
            <Text style={styles.bulletPoint}>• Contenham pelo menos 8 caracteres</Text>
            <Text style={styles.bulletPoint}>• Incluam letras maiúsculas e minúsculas</Text>
            <Text style={styles.bulletPoint}>• Possuam números e caracteres especiais</Text>
            <Text style={styles.paragraph}>
                O TeleSUS também implementa mecanismos de autenticação de dois fatores (2FA) para adicionar uma camada extra de segurança ao acesso das contas.
            </Text>

            <Text style={styles.sectionTitle}>7. Atualizações de Segurança</Text>
            <Text style={styles.paragraph}>
                O TeleSUS realiza regularmente atualizações de segurança para proteger o sistema contra vulnerabilidades emergentes e ameaças cibernéticas. Os usuários são notificados sobre quaisquer mudanças que possam impactar a utilização do serviço.
            </Text>

            <Text style={styles.sectionTitle}>8. Direitos dos Usuários</Text>
            <Text style={styles.paragraph}>
                Os usuários do TeleSUS têm o direito de:
            </Text>
            <Text style={styles.bulletPoint}>• Acessar suas informações pessoais e médicas armazenadas no sistema</Text>
            <Text style={styles.bulletPoint}>• Solicitar correções de dados incorretos ou desatualizados</Text>
            <Text style={styles.bulletPoint}>• Requerer a exclusão de suas informações pessoais, exceto quando a retenção dos dados for necessária por motivos legais ou regulamentares</Text>

            <Text style={styles.sectionTitle}>9. Conformidade Legal</Text>
            <Text style={styles.paragraph}>
                O TeleSUS opera em conformidade com as leis e regulamentações vigentes sobre proteção de dados e privacidade, incluindo a Lei Geral de Proteção de Dados (LGPD) no Brasil. Qualquer atualização ou modificação nas leis de privacidade será refletida nas práticas de segurança do TeleSUS.
            </Text>

            <Text style={styles.sectionTitle}>10. Contato e Suporte</Text>
            <Text style={styles.paragraph}>
                Para quaisquer questões, preocupações ou solicitações relacionadas à segurança e privacidade dos dados no TeleSUS, os usuários podem entrar em contato com a equipe de suporte através dos canais de atendimento disponíveis no site oficial.
            </Text>

            <Text style={styles.paragraph}>
                O TeleSUS reafirma seu compromisso com a segurança dos dados e a privacidade dos usuários, garantindo um ambiente seguro e confiável para o atendimento online de saúde.
            </Text>
            </ScrollView>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  cont1: {
    width: "100%",
    height: 800,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#0D47A1'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  title1: {
    marginTop: 60,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 20,
    color: '#fff',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#555',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
    marginBottom: 10,
  },
  bulletPoint: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
    marginLeft: 20,
    marginBottom: 5,
  },
});
